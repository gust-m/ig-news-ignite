import styles from './styles.module.scss';

export const SubscribeButton = (): JSX.Element => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe
    </button>
  );
};
