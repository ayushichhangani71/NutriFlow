import  { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  // Function to handle Google Sign In
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error:', error.message);
    }
  };

  // Function to handle logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error:', error.message);
    }
  };

  // Check for the logged-in user on component mount
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return (
    <div>
      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <img
            src={user.user_metadata.avatar_url || 'default-avatar-url'}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">{user.user_metadata.full_name}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
          <button
            onClick={() => window.location.href = '/subscribe'}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;