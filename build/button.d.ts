import * as React from "react";
interface ButtonProps {
    textTitle: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Button extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
export {};
