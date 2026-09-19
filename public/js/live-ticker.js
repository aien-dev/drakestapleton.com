// Drake Stapleton - Sovereign Live Telemetry Client
// Sub-millisecond stream from NVIDIA DGX Spark (Grace Blackwell GB10)
(function() {
  if (document.getElementById('spark-live-ticker')) return;

  const bar = document.createElement('div');
  bar.id = 'spark-live-ticker';
  bar.style.cssText = `
    position: fixed;
    bottom: 12px;
    right: 16px;
    z-index: 9999;
    background: rgba(10, 15, 29, 0.92);
    border: 1px solid rgba(56, 189, 248, 0.35);
    border-radius: 9999px;
    padding: 6px 14px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 11px;
    color: #94a3b8;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(56, 189, 248, 0.15);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    user-select: none;
  `;

  bar.innerHTML = `
    <span id="ticker-dot" style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;"></span>
    <span style="color:#e2e8f0;font-weight:600;letter-spacing:0.05em;">SPARK GB10</span>
    <span style="color:#334155;">|</span>
    <span id="ticker-gpu">LOAD: --</span>
    <span style="color:#334155;">|</span>
    <span id="ticker-aien" style="color:#38bdf8;">AIEN: ONLINE</span>
  `;

  document.body.appendChild(bar);

  const dot = document.getElementById('ticker-dot');
  const gpuLabel = document.getElementById('ticker-gpu');
  const aienLabel = document.getElementById('ticker-aien');

  let es = null;
  function connect() {
    try {
      es = new EventSource('/api/live/stream');
      es.addEventListener('telemetry', (e) => {
        try {
          const data = JSON.parse(e.data);
          dot.style.background = '#10b981';
          dot.style.boxShadow = '0 0 8px #10b981';
          gpuLabel.textContent = `GPU ${data.gpu_utilization_pct}% (${data.gpu_temperature_c}°C)`;
          if (data.latest_milestone) {
            aienLabel.textContent = `AIEN: ${data.latest_milestone}`;
            aienLabel.title = `Goal: ${data.active_goal} | Uptime: ${data.uptime_seconds}s`;
          }
        } catch(err) {}
      });

      es.onerror = () => {
        dot.style.background = '#f59e0b';
        dot.style.boxShadow = '0 0 8px #f59e0b';
        gpuLabel.textContent = 'STANDBY';
        aienLabel.textContent = 'AIEN: LOCAL CACHE';
        if (es) { es.close(); }
        setTimeout(connect, 5000);
      };
    } catch(e) {
      dot.style.background = '#64748b';
      gpuLabel.textContent = 'OFFLINE';
    }
  }

  connect();
})();
