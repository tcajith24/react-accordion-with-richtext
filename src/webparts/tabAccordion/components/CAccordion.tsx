


import * as React from 'react';
import styles from './CAccordion.module.scss';
import { ICAccordionProps } from './ICAccordionProps';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import { Editor } from '@tinymce/tinymce-react';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from './utilities/Accordion/index';

export default class CAccordion extends React.Component<ICAccordionProps, {}> {
  public handleEditorChange = (e) => {
    var id = e.target.id.split("-editor-")[1];
    //Save the content in properties

    this.props.tabs[id].Content = e.target.getContent();
  }
  public render(): React.ReactElement<ICAccordionProps> {
    if (this.props.displayMode === DisplayMode.Edit) {
      return (
        <div className="side-content">
          <div className='side-content-item no-bg-title pt-0'>
            <div className={styles.webpartheader}>
              {/* <WebPartTitle displayMode={this.props.displayMode}
                title={this.props.title}
                updateProperty={this.props.fUpdateProperty}
                className={styles.webparttitle} /> */}
              <h1 className="no-bold subsec-margin gold-txt">
                Talent Acquisition
              </h1>
            </div>
            <div className='sec-margin'>
              <Accordion className={"accordion menu-accordion"} aria-live="polite" accordion={this.props.accordion}>
                {
                  this.props.tabs.map((tab: any, index: number) => {
                    return (
                      <AccordionItem key={"tab" + index} className={"accordion-item"} id={"acc" + (index + 1)} >
                        <AccordionItemTitle className={"accordion-header h2"} id={this.props.guid + '-title-' + index}>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target={"#accordion__body-acc" + (index + 1)}
                            aria-expanded="false"
                            aria-controls={"accordion__body-acc" + (index + 1)}
                          >
                            {tab.Title}
                          </button>
                        </AccordionItemTitle>
                        <AccordionItemBody id={"collapse" + (index + 1)} className={"accordion-collapse collapse"} arialabelledby={this.props.guid + '-title-' + index}>
                          <div className='accordion-body'>
                            <Editor
                              id={this.props.guid + '-editor-' + index}
                              value={tab.Content}
                              init={{
                                content_style: "a {color:rgb(0,120,212) !important}",
                                plugins: 'link image table lists media code',
                                menubar: 'edit insert format table lists view',  // skip file
                                height: "240",
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | numlist bullist | media | code',
                                table_responsive_width: true,
                                table_default_styles: {
                                  'width': '100%',
                                  'height': 'auto'
                                },
                                image_advtab: true,
                                style_formats: [
                                  {
                                    title: 'Headings', items: [
                                      { title: 'Heading 1', format: 'h2' },
                                      { title: 'Heading 2', format: 'h3' },
                                      { title: 'Heading 3', format: 'h4' }
                                    ]
                                  }]

                              }}
                              onChange={this.handleEditorChange}
                            />
                          </div>
                        </AccordionItemBody>
                      </AccordionItem>
                    );
                  })
                }
              </Accordion>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="side-content">
          <div className='side-content-item no-bg-title pt-0'>
            <div className={styles.webpartheader}>
              {/* <WebPartTitle displayMode={this.props.displayMode}
                title={this.props.title}
                updateProperty={this.props.fUpdateProperty}
                className={styles.webparttitle} /> */}
              <h1 className="no-bold subsec-margin gold-txt">
                Talent Acquisition
              </h1>
            </div>
            <div className='sec-margin'>
              <Accordion className={"accordion menu-accordion"} aria-live="polite" accordion={this.props.accordion}>
                {
                  this.props.tabs.map((tab: any, index: number) => {
                    return (
                      <AccordionItem key={"tab" + index} className={"accordion-item"} id={"acc" + (index + 1)} >
                        <AccordionItemTitle className={"accordion-header h2"} id={this.props.guid + '-title-' + index}>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target={"#accordion__body-acc" + (index + 1)}
                            aria-expanded="false"
                            aria-controls={"accordion__body-acc" + (index + 1)}
                          >
                            {tab.Title}
                          </button>
                        </AccordionItemTitle>
                        <AccordionItemBody id={"collapse" + (index + 1)} className={"accordion-collapse collapse"} arialabelledby={this.props.guid + '-title-' + index}>
                          <div className='accordion-body'>
                            <div dangerouslySetInnerHTML={{ __html: tab.Content }} id={this.props.guid}></div>
                          </div>
                        </AccordionItemBody>
                      </AccordionItem>
                    );
                  })
                }
              </Accordion>
            </div>
          </div>
        </div>
      );
    }


  }
}
