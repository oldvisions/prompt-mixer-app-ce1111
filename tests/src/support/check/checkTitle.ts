/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default async (
  falseCase: boolean,
  expectedTitle: string
): Promise<void> => {
  /**
   * The title of the current browser window
   * @type {String}
   */
  const title = await browser.getTitle();

  if (falseCase) {
    await expect(title).not.toEqual(
      expectedTitle,
      // @ts-expect-error
      `Expected title not to be "${expectedTitle}"`
    );
  } else {
    await expect(title).toEqual(
      expectedTitle,
      // @ts-expect-error
      `Expected title to be "${expectedTitle}" but found "${title}"`
    );
  }
};
