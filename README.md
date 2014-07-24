# Consumer-friendly mobile app privacy notices
Easy-to-install mobile app privacy screens that provide enhanced transparency for consumers.

## Intro
App developers want to inform consumers clearly and accurately, but traditional privacy policies written in legalese are difficult for consumers to understand. The Application Developers Alliance and its member Intuit have partnered to provide open source code for consumer-friendly short-form privacy notices--simple, easily understandable screens that clearly inform consumers what data the app is collecting and with whom the data is shared. The screens supplement traditional privacy policies by summarizing important information in a consumer-friendly design. 

## Instructions
Sample screenshots from Intuit's Quickbooks, legal questionnaire and FAQs can be found in supporting_docs folder.

We recommend that you host this on a web server so that you may update your privacy policy to be able to change it dynamically if your data practices change.

* Download the entire code/configuration package.
* For the lawyers/legal team:
  * Find the questionnaire and fill in the appropriate responses.
* For the developers:
  * Configuring the app.
    * Under the "assets" folder, find the "config.json" file and edit it using a text/html editor.
    * Fill in the various portions using the responses of the questionnaire.
    * Under "pageOptions":
      * "headerImage": Location of the image to be displayed in the header.
      * "headerColor": Color of the header
      * "headline": Text in the header
      * "subHeading": Sub-header text
      * "footerLink": Text in the footer link
      * "footerLinkURL": URL for the footer link
      * "collectionSectionHeader": Label for the 1st tab of the app.
      * "doNotCollectSectionHeader": Label for the 2nd section of the 1st tab.
      * "sharedSectionHeader": Label for the 2nd tab of the app.
      * "dataNotSharedSectionHeader": Label for the 2nd section of the 2nd tab.
    * Under "collected", "notCollected", "shared", "notShared"
      * Fill in the content using the questionnaire filled in by the legal team.
  * Testing the app.
    * Once the configuration is complete, open the "privacy.html" file in a browser.
    * Configuration is read in automatically by the html page and changes are reflected immediately.

##Why you should use short-form notices
The short-form notices allow developers to comply with the Mobile App Privacy Voluntary Code of Conduct created through U.S. government-hosted talks on mobile app privacy in 2012-2013. App industry stakeholders and consumer and privacy advocacy groups reached common ground to develop the Voluntary guidelines for what apps should communicate with consumers about their data collection practices. 

Read the Code of Conduct (pdf): http://www.ntia.doc.gov/files/ntia/publications/july_25_code_draft.pdf

Learn more about the U.S. governent-hosted talks: http://www.ntia.doc.gov/other-publication/2013/privacy-multistakeholder-process-mobile-application-transparency

## License
This project is provided under the terms of the MIT license (http://opensource.org/licenses/MIT).
