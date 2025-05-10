import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = '/dashboard';
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: 100 }}>
      <img src="/hm2havok.png" alt="HM2 Havok" width="150" />
      <h1>SHTF Medical Skills LMS</h1>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
