import '../styles/home.css'

export default function Home() {
  return (
    <div className="home-page">

      <aside className="sidebar">
        <h2>Sistema</h2>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Usuários</a>
          <a href="#">Relatórios</a>
          <a href="#">Configurações</a>
        </nav>
      </aside>

      <main className="content">
        <h1>Página Principal</h1>

        <div className="cards">

          <div className="card">
            <h3>Usuários</h3>
            <p>124 cadastrados</p>
          </div>

          <div className="card">
            <h3>Relatórios</h3>
            <p>12 pendentes</p>
          </div>

          <div className="card">
            <h3>Atividades</h3>
            <p>38 hoje</p>
          </div>

        </div>
      </main>

    </div>
  )
}