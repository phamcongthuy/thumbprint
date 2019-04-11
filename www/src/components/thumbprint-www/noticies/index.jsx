import React from 'react';
import { ThemedLink, Title, Text } from '@thumbtack/thumbprint-react';
import styles from './index.module.scss';

const Notices = () => (
    <div>
        <div className="mb5 bb b-gray-300 pb5">
            <div className={styles.readingWidth}>
                <Title size={4} className="mb2">
                    bạn muốn đóng góp?
                </Title>
                <Text className="black-300 mb4">
                    Nuôi thỏ (nuoitho.com) khẳng định các ý kiến đóng góp của bạn được trân trọng và những ý kiến của bạn nâng tầm vai trò chăn nuôi thỏ tại Việt Nam nói chung, hãy đóng góp cho chúng tôi.
                </Text>
                <ThemedLink theme="primary" to="/overview/contributing/">
                    Đến trang đóng góp nội dung
                </ThemedLink>
            </div>
        </div>
        <div>
            <div className={styles.readingWidth}>
                <Title size={4} className="mb2">
                    ecommerce web thịt thỏ tại Nuôithỏ.com và hợp tác
                </Title>
                <Text className="black-300 mb4">
                    Chúng tôi giải quyết bài toán thịt thỏ bằng cách trực tiếp tham gia vào ngành chăn nuôi và cùng hợp tác.
                </Text>
                <ThemedLink theme="primary" to="https://nuoitho.com/careers/">
                    Cửa hàng ecommerce thỏ
                </ThemedLink>
            </div>
        </div>
    </div>
);

export default Notices;
