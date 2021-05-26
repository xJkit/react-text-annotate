import React from 'react';
import { MarkProps } from './Mark';
import { Span } from './span';
interface TokenSpan {
    start: number;
    end: number;
    tokens: string[];
}
export interface TokenAnnotatorProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tokens: string[];
    value: T[];
    onChange: (value: T[]) => any;
    getSpan?: (span: TokenSpan) => T;
    renderMark?: (props: MarkProps) => JSX.Element;
}
declare const TokenAnnotator: <T extends Span>(props: TokenAnnotatorProps<T>) => JSX.Element;
export default TokenAnnotator;
