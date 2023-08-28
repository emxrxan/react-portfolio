import React from 'react'
import context from '../../Context'
import { useContext, Fragment } from 'react'
import CloseDetail from '../CloseDetail/CloseDetail'
import DetailContent from '../DetailContent/DetailContent'
import './DetailContainer.css'

export default function DetailContainer() {

    const {detail, showDetail, setShowDetail} = useContext(context);

    const closeDetail = () => {
        setShowDetail(null);
    }
  return (<Fragment>
            {showDetail && <div className='showDetail'>
                <CloseDetail onClick={() => closeDetail()}/>
                <DetailContent list={detail}/>
                
            </div>}
    </Fragment>
  )
}
