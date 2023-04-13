import { connect } from 'react-redux'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { updateCollapse } from '/@/redux/modules/menu/action'

const CollapseIcon = (props: any) => {
    const { isCollapse, updateCollapse } = props
    return (
        <div
            className="collapsed flex items-center"
            onClick={() => {
                updateCollapse(!isCollapse)
            }}
        >
            {isCollapse ? (
                <MenuUnfoldOutlined id="isCollapse" />
            ) : (
                <MenuFoldOutlined id="isCollapse" />
            )}
        </div>
    )
}
const mapStateToProps = (state: any) => state.menu
export default connect(mapStateToProps, { updateCollapse })(CollapseIcon)
