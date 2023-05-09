import { SettingOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

import Settings from './Settings'

const Header = (props: any) =>
    props.headerContent && (
        <div className="flex items-center justify-between py-[16px]">
            <div className="header-left flex">{props.headerContent.content()}</div>
            <div className="cursor-pointer">
                {props.headerContent.isShowFilter && (
                    <Settings
                        settingDisable={props.headerContent.settingDisable || []}
                        columns={props.columns || []}
                        setColumns={props.setColumns}
                    >
                        <Tooltip title="列设置">
                            <span className="text-[18px]">
                                <SettingOutlined />
                            </span>
                        </Tooltip>
                    </Settings>
                )}
            </div>
        </div>
    )

export default Header
