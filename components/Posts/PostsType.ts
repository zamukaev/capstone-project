// types for Posts page

export interface IPosts {
  _id: string;
  title: string;
  content: string;
  alt?: string;
  image: string;
}

export interface StyledSelectionProps {
  margin?: string;
}
