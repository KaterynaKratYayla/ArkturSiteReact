import React from 'react'
import { CloseCircleFilled} from '@ant-design/icons';

import './ClearInputCSS.css';

export const ClearInput = ({makevisible,clearInput}) =>{

    return(
        <div class={ makevisible === true ? 'visibleCross' : 'notVisibleCross' }
             onClick={clearInput}>
            <CloseCircleFilled style={{color:'slategrey'}}/>
        </div>
    )
}