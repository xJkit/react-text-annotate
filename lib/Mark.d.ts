import React from 'react';
export interface MarkProps {
    key: string;
    content: string;
    start: number;
    end: number;
    tag: string;
    color?: string;
    onClick: (any: any) => any;
    tagStyle: any;
}
declare const Mark: React.SFC<MarkProps>;
export default Mark;
