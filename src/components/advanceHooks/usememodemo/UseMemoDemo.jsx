import React, {  useMemo } from 'react';
import orderBy from 'lodash/orderBy'

const UseMemoDemo = ({ apiData, simpleFlag, changeText }) => {
    
    // One Way
    const  orderBydata = orderBy(apiData, ['created', 'asc']);
    console.log('orderBydata', orderBydata)
    
    // // Second Way
    // const orderBydata = useMemo(() => {
    //     const result = orderBy(apiData, ['created', 'asc']);
    //     console.log('orderBydata', result)
    //    return result;
    // }, [apiData])


    return (
        <div>
            <div className="an-18 bold-text redcolor--text text-center">
                UseMemo Demo
            </div>
            <div className="text-center">
                {
                    orderBydata&&
                    orderBydata.map((e,i) => {
                        return (
                            <div key={i} className="pa10 ma10 dark light--text">
                                {e.name}
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={changeText}>
                Simple Text is: {String(simpleFlag)}
            </div>
        </div>
    )
}

export default UseMemoDemo