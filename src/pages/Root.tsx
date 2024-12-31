import { FunctionComponent, useCallback } from "react";
import HBA1CLevelRange from "../components/HBA1CLevelRange";
import FactorsList from "../components/FactorsList";
import FactorsList1 from "../components/FactorsList1";
import styles from "./Root.module.css";

export type RootType = {
  className?: string;
};

const Root: FunctionComponent<RootType> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div className={[styles.root, className].join(" ")}>
      <HBA1CLevelRange yourEstimatedHbA1cLevels="Your estimated HbA1c Levels" />
      <div className={styles.factorsImpact} data-acc-group>
        <div className={styles.factorsDescription}>
          <h3 className={styles.factorsAffectingHba1c}>
            Factors Affecting HbA1c Levels
          </h3>
          <div className={styles.basedOnYour}>
            Based on your assessment results
          </div>
        </div>
        <div
          className={styles.factorsList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Weight</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorsValues}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Weight</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div
          className={styles.factorsList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Diet</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild11} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorsValues}>
                <div className={styles.div1}>7/10</div>
                <img
                  className={styles.arrowChevronRightIcon2}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.averageHighContainer}>
                  <span>Average</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864-1.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alerttrianglefill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Weight</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <FactorsList />
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Weight</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div
          className={styles.factorsList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Sleep</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild32} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorsValues}>
                <div className={styles.h}>5 h</div>
                <img
                  className={styles.arrowChevronRightIcon5}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.goodLowContainer}>
                  <span>Good</span>
                  <span className={styles.highImpact}> | Low Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864-3.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertcheckcirclefill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight}>
            <p className={styles.weight1}>Weight</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <FactorsList1 />
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.weight10}>Stress</div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorsListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div className={styles.maintainingAHealthy}>
          Maintaining a healthy weight, eating right, exercising regularly,
          sleeping well and managing stress help to improve HbA1c levels.
        </div>
      </div>
    </div>
  );
};

export default Root;
