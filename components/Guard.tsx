import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { auth } from '../firebase';

const Guard = () => {
  const router = useRouter();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (current) => {
          if (current) {
            return router.push('/')
          } else {
           return router.push("/login");
          }
        });
    
        return () => {
          unsub();
        };
      }, []);

      return <Navi />

}

export default Guard