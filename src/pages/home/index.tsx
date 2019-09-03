import { View, Text, Input, Image } from "@tarojs/components"
import { getSignByUrl } from "../../servers/servers";
import { timeageFormat, useAsyncEffect } from "@/utils/utils";
import { AtDivider, AtTag, AtImagePicker, AtButton, AtForm, AtInput, AtTimeline } from 'taro-ui'
import { useState, previewImage, useRouter, SFC } from "@tarojs/taro";
import { useDispatch, useSelector } from "@tarojs/redux";
import { StoreIF } from "@/store/reducers";
import { INITUSER, UPDATEUSER, DELUSER } from "@/store/constants/user";
import CardShow from "@/components/card/CardShow";



const styles = require('./index.module.less')


const Home: SFC = () => {
    // 请求后台代码示例
    useAsyncEffect(async () => {
        const {data}: {data: Ajax.AjaxResponse} = await getSignByUrl()
        // console.log(data)
    }, [])
    const [files, setFiles] = useState<any[]>([{
        url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
      },
      {
        url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
      },
      {
        url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
    }])
    

    const [inputUser, setInputUser] = useState({
        name: '',
        age: '',
        sex: 1
    })

    const inputChange = (v, type: string) => {
        setInputUser({
            ...inputUser,
            [type]: v
        })
    }
    const dispatch = useDispatch()
    const user = useSelector((store: StoreIF) => store.user)
    return (
        <View className={styles.home_wrap}>
            {/* timeago示例 */}
            <View>
                <AtDivider content='timeago&taro-ui示例' fontColor='#ed3f14' lineColor='#ed3f14' />
                <View className={styles.time_wrap_show}>
                    <AtTag size="small" active circle>{timeageFormat(+new Date() - 1*1000, 'zh')}</AtTag>
                    <AtTag size="small" active circle>{timeageFormat(+new Date() - 1*60*1000, 'zh')}</AtTag>
                    <AtTag size="small" active circle>{timeageFormat(+new Date() - 1*60*60*1000, 'zh')}</AtTag>
                    <AtTag size="small" active circle>{timeageFormat(+new Date() - 1*24*60*60*1000, 'zh')}</AtTag>
                    <AtTag size="small" active circle>{timeageFormat(+new Date() - 10*24*60*60*1000, 'zh')}</AtTag>
                    <AtTag size="small" active circle>{timeageFormat(+new Date() - 365*24*60*60*1000, 'zh')}</AtTag>
                </View>
            </View>
            {/* 上传文件示例 */}
            <View>
                <AtDivider content='上传文件示例' fontColor='#2d8cf0' lineColor='#2d8cf0' />
                <AtImagePicker
                    files={files}
                    onChange={(files) => {
                        console.log(files)
                        setFiles(files)
                    }}
                    onImageClick={(index, file: any) => {
                        previewImage({
                            urls: [file.url]
                        })
                    }}
                />
            </View>
            {/* router跳转获取传递的参数 */}
            <View>
                <AtDivider content='router跳转获取传递的参数' fontColor='#ff9900' lineColor='#ff9900' />
                <Image className={styles.router_img} src={require('@/assets/imgs/router.png')} />
            </View>
            {/* redux&Hooks */}
            <View>
                <AtDivider content='redux&Hooks' fontColor='#e74c3c' lineColor='#e74c3c' />
                <View>
                    <AtForm>
                        <AtInput title='姓名' clear name='name' value={inputUser.name} onChange={(e) => {inputChange(e, 'name')}} />
                        <AtInput title='年龄' clear name='name' value={inputUser.age} onChange={(e) => {inputChange(e, 'age')}} />
                        <AtInput title='性别' clear name='name' value={inputUser.sex} onChange={(e) => {inputChange(e, 'sex')}} />
                    </AtForm>
                </View>
                <View className={styles.redux_btn_wrap}>
                    <AtButton type='primary' size='small' onClick={() => {
                        dispatch({
                            type: INITUSER, 
                            payload: {
                                name: inputUser.name,
                                age: inputUser.age,
                                sex: inputUser.sex
                            }
                        })
                    }}>INITUSER</AtButton>
                    <AtButton type='primary' size='small' onClick={() => {
                        dispatch({
                            type: UPDATEUSER, 
                            payload: {
                                name: inputUser.name,
                                age: inputUser.age,
                                sex: inputUser.sex
                            }
                        })
                    }}>UPDATEUSER</AtButton>
                    <AtButton type='primary' size='small' onClick={() => {
                        dispatch({
                            type: DELUSER
                        })
                    }}>DELUSER</AtButton>
                </View>
                <CardShow name={user.name} age={user.age} sex={user.sex} />
            </View>
        </View>
    )
}

export default Home

/**
 * 1、启用modules
 * 2、hooks编辑开发 useState, useEffect, useRef(暂不可用), useCallback, useMemo, useReducer, useRouter, useDidShow, useDidHide, useReachBottom, usePulldownRefresh
 * 3、timeago示例代码
 * 4、alias别名配置
 * 5、封装http请求方法（包含Token）
 * 6、less代码引入
 * 7、taro-ui的引入
 * 8、redux结合hooks的使用
 */