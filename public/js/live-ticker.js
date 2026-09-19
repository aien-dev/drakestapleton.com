// Drake Stapleton - Sovereign Live Telemetry & Interactive AIEN Terminal
// Real-time inference stream from NVIDIA DGX Spark (Grace Blackwell GB10 @ port 18006)
(function() {
  if (document.getElementById('spark-live-ticker')) return;

  // 1. Create Floating Ticker Pill
  const bar = document.createElement('div');
  bar.id = 'spark-live-ticker';
  bar.style.cssText = `
    position: fixed;
    bottom: 12px;
    right: 16px;
    z-index: 9999;
    background: rgba(10, 15, 29, 0.94);
    border: 1px solid rgba(56, 189, 248, 0.35);
    border-radius: 9999px;
    padding: 6px 14px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 11px;
    color: #94a3b8;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(56, 189, 248, 0.15);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
    user-select: none;
  `;

  bar.innerHTML = `
    <span id="ticker-dot" style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;"></span>
    <span style="color:#e2e8f0;font-weight:600;letter-spacing:0.05em;">SPARK GB10</span>
    <span style="color:#334155;">|</span>
    <span id="ticker-gpu">LOAD: --</span>
    <span style="color:#334155;">|</span>
    <button id="open-terminal-btn" style="background:#0284c7;color:#fff;border:none;border-radius:9999px;padding:2px 8px;font-size:10px;font-weight:600;cursor:pointer;letter-spacing:0.05em;display:flex;align-items:center;gap:4px;">
      <span>⚡ TALK TO AIEN</span>
    </button>
  `;

  document.body.appendChild(bar);

  // 2. Create Terminal Drawer Overlay
  const drawer = document.createElement('div');
  drawer.id = 'aien-terminal-drawer';
  drawer.style.cssText = `
    display: none;
    position: fixed;
    bottom: 54px;
    right: 16px;
    width: 440px;
    max-width: calc(100vw - 32px);
    height: 520px;
    max-height: calc(100vh - 80px);
    background: rgba(10, 15, 29, 0.98);
    border: 1px solid rgba(56, 189, 248, 0.4);
    border-radius: 12px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.15);
    backdrop-filter: blur(16px);
    z-index: 10000;
    flex-direction: column;
    overflow: hidden;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 12px;
  `;

  drawer.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:between;padding:10px 14px;background:rgba(15, 23, 42, 0.9);border-bottom:1px solid rgba(56, 189, 248, 0.2);">
      <div style="display:flex;align-items:center;gap:8px;flex:1;">
        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;"></span>
        <span style="color:#f8fafc;font-weight:700;letter-spacing:0.05em;font-size:11px;">AIEN CONSOLE // GB10 @ 18006</span>
      </div>
      <button id="close-terminal-btn" style="background:transparent;border:none;color:#94a3b8;font-size:16px;cursor:pointer;padding:0 4px;">✕</button>
    </div>

    <!-- Quick Prompt Chips -->
    <div style="display:flex;gap:6px;overflow-x:auto;padding:8px 12px;background:rgba(2, 6, 23, 0.6);border-bottom:1px solid rgba(56, 189, 248, 0.15);white-space:nowrap;">
      <button class="chip-btn" data-q="Who is Drake Stapleton?">Who is Drake?</button>
      <button class="chip-btn" data-q="Tell me about Drake's Mom and where his drive comes from.">Mom & Drive</button>
      <button class="chip-btn" data-q="Explain the Grace Blackwell GB10 hardware and why sub-microsecond inference matters.">Grace Blackwell</button>
      <button class="chip-btn" data-q="What is Atlas Symphony and how does multi-level agent orchestration work?">Atlas Symphony</button>
    </div>

    <!-- Chat Messages Window -->
    <div id="terminal-messages" style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:12px;">
      <div style="background:rgba(30, 41, 59, 0.5);border:1px solid rgba(56, 189, 248, 0.2);border-radius:8px;padding:10px;color:#cbd5e1;line-height:1.5;">
        <span style="color:#38bdf8;font-weight:600;">AIEN:</span> I am online directly on the Grace Blackwell GB10 GPU. Ask me about Drake's journey, the sovereign stack, or the research record.
      </div>
    </div>

    <!-- Input Row -->
    <form id="terminal-form" style="display:flex;gap:8px;padding:10px;background:rgba(15, 23, 42, 0.95);border-top:1px solid rgba(56, 189, 248, 0.2);">
      <input type="text" id="terminal-input" placeholder="Ask AIEN..." style="flex:1;background:rgba(2, 6, 23, 0.8);border:1px solid rgba(56, 189, 248, 0.3);border-radius:6px;padding:8px 10px;color:#f8fafc;font-family:inherit;font-size:11px;outline:none;" />
      <button type="submit" id="terminal-send" style="background:#0284c7;color:#fff;border:none;border-radius:6px;padding:8px 14px;font-size:11px;font-weight:600;cursor:pointer;">SEND</button>
    </form>
  `;

  // Inject Chip Styles
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .chip-btn {
      background: rgba(15, 23, 42, 0.8);
      color: #94a3b8;
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 9999px;
      padding: 3px 8px;
      font-size: 10px;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .chip-btn:hover {
      background: rgba(56, 189, 248, 0.15);
      color: #f8fafc;
      border-color: #38bdf8;
    }
    .aien-reasoning {
      background: rgba(15, 23, 42, 0.6);
      border: 1px dashed rgba(148, 163, 184, 0.3);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 10px;
      color: #94a3b8;
      margin-bottom: 6px;
    }
    .aien-reasoning summary {
      cursor: pointer;
      color: #38bdf8;
      font-weight: 600;
    }
  `;
  document.head.appendChild(styleTag);
  document.body.appendChild(drawer);

  // 3. Setup Telemetry SSE Connection
  const dot = document.getElementById('ticker-dot');
  const gpuLabel = document.getElementById('ticker-gpu');

  let es = null;
  function connectTelemetry() {
    try {
      es = new EventSource('/api/live/stream');
      es.addEventListener('telemetry', (e) => {
        try {
          const data = JSON.parse(e.data);
          dot.style.background = '#10b981';
          dot.style.boxShadow = '0 0 8px #10b981';
          gpuLabel.textContent = `GPU ${data.gpu_utilization_pct}% (${data.gpu_temperature_c}°C)`;
        } catch(err) {}
      });

      es.onerror = () => {
        dot.style.background = '#f59e0b';
        dot.style.boxShadow = '0 0 8px #f59e0b';
        gpuLabel.textContent = 'STANDBY';
        if (es) { es.close(); }
        setTimeout(connectTelemetry, 5000);
      };
    } catch(e) {
      dot.style.background = '#64748b';
      gpuLabel.textContent = 'OFFLINE';
    }
  }
  connectTelemetry();

  // 4. Drawer Toggle Handlers
  const openBtn = document.getElementById('open-terminal-btn');
  const closeBtn = document.getElementById('close-terminal-btn');
  const messagesBox = document.getElementById('terminal-messages');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const sendBtn = document.getElementById('terminal-send');

  openBtn.addEventListener('click', () => {
    drawer.style.display = 'flex';
    terminalInput.focus();
  });

  closeBtn.addEventListener('click', () => {
    drawer.style.display = 'none';
  });

  // Quick Chips
  drawer.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-q');
      terminalInput.value = q;
      terminalForm.dispatchEvent(new Event('submit'));
    });
  });

  // 5. Chat Submission Handler
  terminalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = terminalInput.value.trim();
    if (!query) return;

    terminalInput.value = '';
    terminalInput.disabled = true;
    sendBtn.disabled = true;

    // Render User Message
    const userDiv = document.createElement('div');
    userDiv.style.cssText = 'align-self:flex-end;background:rgba(2, 132, 199, 0.2);border:1px solid rgba(56, 189, 248, 0.3);border-radius:8px;padding:8px 12px;color:#f8fafc;max-width:85%;line-height:1.4;';
    userDiv.innerHTML = `<span style="color:#38bdf8;font-weight:600;">You:</span> ${escapeHtml(query)}`;
    messagesBox.appendChild(userDiv);

    // Prepare AIEN Response Container
    const aienDiv = document.createElement('div');
    aienDiv.style.cssText = 'background:rgba(30, 41, 59, 0.5);border:1px solid rgba(56, 189, 248, 0.2);border-radius:8px;padding:10px;color:#cbd5e1;line-height:1.5;max-width:95%;';
    
    const details = document.createElement('details');
    details.className = 'aien-reasoning';
    details.innerHTML = '<summary>Thinking process (GB10 reasoning)...</summary><div class="reasoning-text" style="margin-top:4px;white-space:pre-wrap;font-size:10px;color:#94a3b8;"></div>';
    details.style.display = 'none';
    aienDiv.appendChild(details);

    const contentSpan = document.createElement('div');
    contentSpan.innerHTML = '<span style="color:#38bdf8;font-weight:600;">AIEN:</span> <span class="content-text">...</span>';
    aienDiv.appendChild(contentSpan);

    messagesBox.appendChild(aienDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    const reasoningText = details.querySelector('.reasoning-text');
    const contentText = contentSpan.querySelector('.content-text');
    contentText.textContent = '';

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (!response.ok) {
        const err = await response.json();
        contentText.textContent = err.error || 'Request failed.';
        finish();
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line.startsWith('event: ')) continue;
          const eventType = line.substring(7);
          const dataLine = lines[i + 1] ? lines[i + 1].trim() : '';

          if (dataLine.startsWith('data: ')) {
            i++;
            try {
              const data = JSON.parse(dataLine.substring(6));
              if (eventType === 'reasoning') {
                details.style.display = 'block';
                reasoningText.textContent += data.token;
                messagesBox.scrollTop = messagesBox.scrollHeight;
              } else if (eventType === 'content') {
                contentText.textContent += data.token;
                messagesBox.scrollTop = messagesBox.scrollHeight;
              }
            } catch(e) {}
          }
        }
      }
    } catch(err) {
      contentText.textContent = 'Connection interrupted.';
    }

    finish();

    function finish() {
      terminalInput.disabled = false;
      sendBtn.disabled = false;
      terminalInput.focus();
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }
  });

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
})();
