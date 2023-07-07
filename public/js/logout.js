const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to logout');
    }
  };

document.querySelector('#logout').addEventListener('click', logout);