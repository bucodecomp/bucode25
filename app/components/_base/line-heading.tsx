/**
 * Since the display font we use has vertical alignment issues, we need to
 * use this component to align the text correctly.
 *
 * Use only for headings of 1 line.
 *
 * @example
 * <Heading>
 *   <h3 className="font-semibold text-[3rem]">
 *     {title}
 *   </h3>
 * </Heading>
 */
export const Heading = ({ children }: { children: React.ReactNode }) => {
  return <span className="pb-[0.3em]">{children}</span>;
};
