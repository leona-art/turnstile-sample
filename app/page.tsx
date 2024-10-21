

import { validateTurnstile } from '@/actions/turnstile';
import TurnstileForm from './components/turnstile-form';
import { useTransition } from 'react';

export default function Home() {
  
  return (
    <main>
      <form action={validateTurnstile}>
        <TurnstileForm />
        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Submit</button>
      </form>
    </main>
  );
}