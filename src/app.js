export const appTemplate = `
<div class="app-container">
  <header class="glass-header">
    <div class="logo">
      <span class="pulse"></span>
      CICD Helper
    </div>
    <nav>
      <ul>
        <li><a href="#" class="active">Dashboard</a></li>
        <li><a href="#">Pipelines</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </header>

  <main class="dashboard-grid">
    <section class="stat-card glass">
      <h3>Build Status</h3>
      <div class="status-indicator">
        <span class="status-icon success">✓</span>
        <span class="status-text">Healthy</span>
      </div>
    </section>

    <section class="stat-card glass">
      <h3>Latest Deployment</h3>
      <p class="timestamp">Today, 10:30 AM</p>
      <p class="version">v1.2.4</p>
    </section>

    <section class="main-content glass">
      <h2>Welcome to your CICD Dashboard</h2>
      <p>Streamline your deployments with automated pipelines and real-time monitoring.</p>
      <div class="action-buttons">
        <button class="primary-btn">Start New Build</button>
        <button class="secondary-btn">View Logs</button>
      </div>
    </section>

    <section class="activity-feed glass">
      <h3>Recent Activity</h3>
      <ul>
        <li><span class="dot blue"></span> Pushed ed3894d to main</li>
        <li><span class="dot green"></span> Build #128 succeeded</li>
        <li><span class="dot orange"></span> Pipeline configured</li>
      </ul>
    </section>
  </main>

  <footer class="glass-footer">
    <p>&copy; 2026 CICD Helper • Powered by Antigravity</p>
  </footer>
</div>
`;
