import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import i18n from '../translation/i18n';

export const LIST_STATUS = [
  {
    id: 1,
    value: 0,
    title: 'locking',
    icon: <CloseCircleFilled style={{ fontSize: '16px', color: '#F94144' }} />,
  },
  {
    id: 2,
    value: 1,
    title: 'active',
    icon: <CheckCircleFilled style={{ fontSize: '16px', color: '#78BE20' }} />,
  },
];
export const LANG_URL = '/v1/language';
export const DEFAULT_SELECTED_MENU_SIDEBAR = '/statistic';
export const DEFAULT_STATUS = 1;
export const MAX_LENGTH_DESCRIPTION_INPUT = 200;
export const DEFAULT_PAGESIZE = 10;
export const DEFAULT_PAGENUMBER = 1;
export const MIN_LENGTH_LANG_TITLE = 3;
export const LIST_COLUMN_TABLE_LANGUAGE = [
  {
    id: 1,
    title: 'ID',
    visible: true,
  },
  {
    id: 2,
    title: i18n.t('language.language'),
    visible: true,
  },
  {
    id: 3,
    title: i18n.t('language.description'),
    visible: true,
  },
  {
    id: 4,
    title: i18n.t('language.status'),
    visible: true,
  },
  {
    id: 5,
    title: i18n.t('language.action'),
    visible: true,
  },
];
