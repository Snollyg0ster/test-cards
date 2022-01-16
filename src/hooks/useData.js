import { useState, useEffect } from 'react';

const useData = (typesOfData, page, step = 3) => {
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsDataLoading(true);
        setIsError(false);
        Promise.all(Array.from({length: typesOfData.length}, 
            (_, i) => fetch(`https://jsonplaceholder.typicode.com/${typesOfData[i]}/?_page=${page}&_limit=${step}`)
            .then(res => res.json())
            .then(res => res))
        ).then(res => {
            let result = [];
            res.forEach((data, dataIndex) => data.forEach((item, index) => {
                if(!result[index]) result[index] = {};
                result[index][typesOfData[dataIndex]] = item;
            }))
            setData(result.filter(item => !typesOfData.find(type => !item[type])))
            setIsDataLoading(false);
        })
        .catch(() => setIsError(true))
    }, [typesOfData, page, step])

    return [data, isDataLoading, isError];
}

export default useData;