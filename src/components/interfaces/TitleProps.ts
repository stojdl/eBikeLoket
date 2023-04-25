export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
}
