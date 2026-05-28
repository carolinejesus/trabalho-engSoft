import '../styles/login.css'

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-card">
                <div className="logo-circle">✈</div>
                <h1>TripToDo</h1>
                
                <p className="subtitle">Gerencie suas viagens com facilidade</p>

                <form>
                    <label>Email</label>
                    <input type="email" placeholder="seu@email.com" />
                    <label>Senha</label>
                    <input type="password" placeholder="••••••••"/>

                    <button>Entrar</button>
                </form>
                
                <p className="signup-link">Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
        </div>
    )
}