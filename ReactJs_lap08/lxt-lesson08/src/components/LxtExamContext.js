import React, { useContext, useEffect, useState } from 'react'
import LxtExamInfo from './LxtExamInfo'

import { ThemeContext } from './LxtExampleContext';

export default function LxtExamContext() {
    let theme = useContext(ThemeContext);

    return (
        <div>
            <p className={theme}>
                Áp dụng:
                <br />
                <span className={theme}>
                    useContext là một React Hook cho phép truy cập dữ liệu từ Context mà không cần phải truyền props qua nhiều cấp (tránh tình trạng props drilling).
                </span>
            </p>
            <LxtExamInfo />
        </div>
    )
}