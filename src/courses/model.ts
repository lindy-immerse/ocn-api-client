export interface OCNCoursesRequest {
    // max of 1000 per import
    ocnCourses: OCNCourse[];
}

export interface OCNCoursesResponse extends OCNCoursesRequest {
    /**
     * sent as "@odata.context"
     */
    dataContext: string;

    /**
     * sent as "@odata.metadataEtag"
     */
    metadataEtag: string;
}

export interface OCNCourse {
    /**
     * This is the OCN provider's unique ID for the course.
     * It is required so that SAP SuccessFactors Learning can
     * maintain a map between learning items and OCN courses.
     **/
    courseID: string;

    /**
     * This is the unique ID of the provider as set in SAP
     * SuccessFactors Learning. It is required.
     */
    providerID: string;

    /**
     * The status of the course. Values can be ACTIVE, INACTIVE,
     * or DELETED. If it is not passed, the system defaults to ACTIVE.
     */
    status: OCNCourseStatus;

    /**
     * An array of titles for the course. Each member of the array is the title in a language. For example:
     * ```
     * {
     *    "locale":"English",
     *    "value":"Can a computer write poetry?"
     * }
     * ```
     * The locale member is a string that uniquely identifies the locale in SAP SuccessFactors Learning.
     * The array must have at least one member (you must have at least one title in one language).
     */
    title: OCNCourseTitle[];

    /**
     * An array of descriptions for the course. Each member of the array is the description in a language.
     * For example:
     * ```
     * {
     *   "locale":"English",
     *   "value":"If you read a poem and feel moved by..."
     * }
     * ```
     * The locale member is a string that uniquely identifies the locale in SAP SuccessFactors Learning.
     * The array must have at least one member (you must have at least one description in one language).
     */
    description: OCNCourseDescription[];

    /**
     * A URI to an image that is the icon for the course. Thumbnails help users recognize
     * the course or the series of courses.
     * */
    thumbnailURI: string;

    /**
     * An array of content sections for the course. For example, if a course is broken into three videos,
     * you create an array of three members, one for each video.
     */
    content: OCNCourseContent[];

    /**
     * An array of prices in different currencies. We use ISO 4217 for our currency codes.
     * ```
     * For example:
     * {
     *   "currency":"USD",
     *   "value":12.00
     * },
     * {
     *   "currency":"INR",
     *   "value":222.00
     * }
     * ```
     */
    // price: OCNCoursePrice[];

    /**
     * An array of scheduling information that tells users when the course is available.
     * These are windows when the course is open.
     **/
    schedule?: OCNCourseSchedule[];

    /**
     * This is the incremental revision of the course.
     * If you do not provide one, the system defaults to 1.
     **/
    revisionNumber: number;

    /**
     * This duration is outside the schedule array.
     * If a schedule array member is missing a duration,
     * the system uses this one for that member of the array.
     **/
    duration: string;
}

export interface OCNCourseContent {
    /**
     * This provider ID almost always matches the provider ID from earlier in the call.
     * But it provides the flexibility for partnerships.
     */
    providerID?: string;

    /**
     * This is the URL that users would click to launch this part of the course.
     */
    launchURL: string;

    /**
     * This is the title for the section of the content.
     * For example, the title for the course can be Artificial Intelligence and Creativity,
     * but the section titles can be Defining Creativity, Can you Create Creativity? and so on.
     * Each member of the array is the title in a language. For example:
     * ```
     * {
     *   "locale":"English",
     *   "value":"Can you Create Creativity?"
     * }
     * ```
     * The locale member is a string that uniquely identifies the locale in SAP SuccessFactors Learning.
     * The array must have at least one member (you must have at least one title in one language).
     **/
    // contentTitle: OCNContentTitle[];
    contentTitle: string;

    /**
     * The unique ID for the section of content.
     **/
    contentID: string;

    /**
     * This is one of the allowed launch types.
     **/
    launchType: number;

    /**
     * If set to true, then the course can be launched on a mobile device.
     **/
    mobileEnabled: boolean;

    /**
     * If mobileEnabled is set to true, and if the mobile URL is different from launchURL,
     * then you can provide the URL that launches the mobile content.
     **/
    mobileLaunchURL: string | null;
}

export interface OCNCourseSchedule {
    /**
     * It is the Unix Epoch date that the course begins its availability.
     **/
    startDate: string;

    /**
     * It is the Unix Epoch date that the course ends its availability.
     **/
    endDate: string;

    /**
     * It is a Boolean that indicates availability.
     * If true, then the course is currently available.
     **/
    active: boolean;

    /**
     * It is a string that users read to know how long the course lasts.
     **/
    duration: string;
}

export enum OCNCourseStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DELETED = "DELETED",
}

export interface OCNCourseTitle {
    locale: string;
    value: string;
}

export interface OCNCourseDescription {
    locale: string;
    value: string;
}

export interface OCNContentTitle {
    locale: string;
    value: string;
}

export interface OCNCoursePrice {
    currency: string;
    value: number;
}
