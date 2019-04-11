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
                    We’re hiring!
                </Title>
                <Text className="black-300 mb4">
                    We’re solving the industry’s most interesting problems with its brightest
                    talent, at a scale where everyone still feels like family.
                </Text>
                <ThemedLink theme="primary" to="https://thumbtack.com/careers/">
                    View open listings
                </ThemedLink>
            </div>
        </div>
    </div>
);

export default Notices;
