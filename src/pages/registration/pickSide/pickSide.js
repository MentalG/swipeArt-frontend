import React from 'react';
// import creator from '../../../icons/Creator.svg'
import Creator from '../../../components/ui-kit/icons/Creator'
import './styles.scss'

const pickSide = props => {

    return (
        <div className='wrapper'>
        <div className='header'>Реєстрація/Вхід</div>
        <div className='content'>
            <div className='icons'>
                {/* <img src={creator} width={'64px'} height={'64px'} color="#fff"/> */}
                <Creator />
            </div>
        </div>
        <div className='footer'>Footer</div>
        </div>
    );
};

export default pickSide;
