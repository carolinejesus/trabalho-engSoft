import '../styles/cadastro.css'

export default function Cadastro() {
    return (
        <div className="login-page">
            <div className="login-card">
                <div className="back-button">⭠ Voltar</div>
                <div className="logo-circle">✈</div>
                <h1>Criar Conta</h1>
                
                <p className="subtitle">Comece a planejar no TripToDo</p>

                <form>
                    <label>Nome</label>
                    <input type="text" placeholder="Seu nome completo" />
                    <label>Email</label>
                    <input type="email" placeholder="seu@email.com" />
                    <label>Senha</label>
                    <input type="password" placeholder="••••••••"/>

                    <button>Cadastrar</button>
                </form>
                
                <p className="signup-link">Já tem uma conta? <a href="#">Faça login</a></p>
            </div>
        </div>
    )
}