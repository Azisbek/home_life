import clsx from "clsx";
import s from "./SkeletonCard.module.css";

export function Skeleton(props) {
  const { className, children, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={clsx("skeleton-bone", s["skeleton-bone"], className)}
    >
      {children}
    </div>
  );
}
