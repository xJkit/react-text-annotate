import React from 'react';
import { Span } from './span';
interface TextSpan extends Span {
    text: string;
}
declare type TextBaseProps<T> = {
    content: string;
    value: T[];
    onChange: (value: T[]) => any;
    getSpan?: (span: TextSpan) => T;
    tagStyle: any;
};
declare type TextAnnotatorProps<T> = React.HTMLAttributes<HTMLDivElement> & TextBaseProps<T>;
declare const TextAnnotator: <T extends Span>(props: TextAnnotatorProps<T>) => JSX.Element;
export default TextAnnotator;
