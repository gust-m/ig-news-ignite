import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({
  priceId,
}: SubscribeButtonProps): JSX.Element => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe
    </button>
  );
};
