import { isEnum } from 'class-validator';
import { TopLevelCategory } from '../top-page.model';

export class FindTopPageDto {
  @isEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

}