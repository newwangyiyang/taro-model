import { FC } from "@tarojs/taro";
import { AtTimeline } from "taro-ui";
import { View } from "@tarojs/components";

const styles = require('./CardShow.module.less')

export interface CardShowPropsIF {
    name: string
    age: number | string
    sex: number | string
}
const CardShow: FC<CardShowPropsIF> = props => {
    return (
        <View className={styles.time_wrap}>
            <AtTimeline 
            items={[
                { title: '姓名', content: [props.name], icon: 'check-circle' }, 
                { title: '年龄', content: [props.age + ''], icon: 'clock' }, 
                { title: '性别', content: [props.sex === 1 ? '男' : '女'], icon: 'clock' }, 
            ]}></AtTimeline>
        </View>
    )
}

export default CardShow