/**
 * blogs
 */
import {BASE_URL} from "./index";
import ajax from "./ajax";

export const reqBlogById = id => ajax(`${BASE_URL}/jcohy/v1/blog/`+id)
