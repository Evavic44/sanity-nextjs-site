/* Pages */
import { page } from "@/schemas/page"
/* Block */
import { formType } from "./blocks/formType";
import { heroType } from "./blocks/heroType";
import { imageGalleryType } from "./blocks/imageGallery";
import { textWithIllustrationType } from "./blocks/textWithIllustration";
import { videoType } from "./blocks/videoType";


/* Settings */ //Need new name
import navigation from "@/schemas/navigation"
import employee from "@/schemas/management/employee"
import position from "@/schemas/management/position"
export const schemaTypes = [
    /* Pages */
    page,

    /* Block */
    formType,
    heroType,
    imageGalleryType,
    textWithIllustrationType,
    videoType,

    /* Settings */ // need new name
    navigation,
    employee,
    position,
];
