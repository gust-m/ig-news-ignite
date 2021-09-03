import { signIn, useSession } from 'next-auth/client';
import { useCallback } from 'react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({
  priceId,
}: SubscribeButtonProps): JSX.Element => {
  const [session] = useSession();
  const handleSubscribe = useCallback(async () => {
    if (!session) {
      signIn('github');
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;
      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }, [session]);
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe
    </button>
  );
};
