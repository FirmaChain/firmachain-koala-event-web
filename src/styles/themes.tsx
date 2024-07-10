const colors = {
  navBackground: '#25293a',
};

const sizes = {
  maxWidth: '1920px',
  mediaSmallWidth: '1600px',
  mediaMaxWidth: '1400px',
  mediaQHDWidth: '2000px',
  mediaMobileWidth: '900px',
  headerHeight: '90px',
  footerHeight: '80px',
  font12: '12px',
  font13: '13px',
  font14: '14px',
  font15: '15px',
  font16: '16px',
  font17: '17px',
  font18: '18px',
  font19: '19px',
  font20: '20px',
  font22: '22px',
  font24: '24px',
  font26: '26px',
  font28: '28px',
  font30: '30px',
  font32: '32px',
  font34: '34px',
  font38: '38px',
  font40: '40px',
  font50: '50px',
  font54: '54px',
  font60: '60px',
};

const urls = {
  tierList: [
    process.env.PUBLIC_URL + '/images/ic_tier_1.png',
    process.env.PUBLIC_URL + '/images/ic_tier_2.png',
    process.env.PUBLIC_URL + '/images/ic_tier_3.png',
    process.env.PUBLIC_URL + '/images/ic_tier_4.png',
    process.env.PUBLIC_URL + '/images/ic_tier_5.png',
  ],
  tierBg: process.env.PUBLIC_URL + '/images/img_tier_bg.png',
  tierCoin: process.env.PUBLIC_URL + '/images/img_tier_coin.png',
  achievementList: [
    {
      enable: process.env.PUBLIC_URL + '/images/img_badge_bronze.png',
      disable: process.env.PUBLIC_URL + '/images/img_badge_bronze_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_badge_silver.png',
      disable: process.env.PUBLIC_URL + '/images/img_badge_silver_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_badge_gold.png',
      disable: process.env.PUBLIC_URL + '/images/img_badge_gold_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_badge_platinum.png',
      disable: process.env.PUBLIC_URL + '/images/img_badge_platinum_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_badge_diamond.png',
      disable: process.env.PUBLIC_URL + '/images/img_badge_diamond_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_medal_dmts.png',
      disable: process.env.PUBLIC_URL + '/images/img_medal_dmts_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_medal_bwb.png',
      disable: process.env.PUBLIC_URL + '/images/img_medal_bwb_disable.png',
    },
    {
      enable: process.env.PUBLIC_URL + '/images/img_medal_udc.png',
      disable: process.env.PUBLIC_URL + '/images/img_medal_udc_disable.png',
    },
  ],
  external: process.env.PUBLIC_URL + '/images/ic_external.svg',
  hudHoverLeft: process.env.PUBLIC_URL + '/images/img_hud_message_left.png',
  hudHoverCenter: process.env.PUBLIC_URL + '/images/img_hud_message_center.png',
  hudHoverRight: process.env.PUBLIC_URL + '/images/img_hud_message_right.png',
  floatingKoa: process.env.PUBLIC_URL + '/images/img_floating_koa.gif',

  quizIcon: process.env.PUBLIC_URL + '/images/ic_quiz.png',
  bead: process.env.PUBLIC_URL + '/images/ic_bead.png',
  torch: process.env.PUBLIC_URL + '/images/img_torch.gif',
  koa: process.env.PUBLIC_URL + '/images/ic_koa.png',
  fct: process.env.PUBLIC_URL + '/images/ic_fct.png',
  headerLogo: process.env.PUBLIC_URL + '/images/img_header_logo.svg',
  headerEcosystem: process.env.PUBLIC_URL + '/images/ic_ecosystem.svg',
  sideHudBox: process.env.PUBLIC_URL + '/images/img_side_hud_box.png',
  rewardIcon: process.env.PUBLIC_URL + '/images/ic_reward.svg',
  achieveIcon: process.env.PUBLIC_URL + '/images/ic_achievement.png',
  titleLogo: process.env.PUBLIC_URL + '/images/img_title_logo.png',
  titleLogo2: process.env.PUBLIC_URL + '/images/img_title_logo2.png',
  missionIcon: process.env.PUBLIC_URL + '/images/ic_mission.png',
  close: process.env.PUBLIC_URL + '/images/ic_close.svg',
  closePixel: process.env.PUBLIC_URL + '/images/ic_close.png',
  back: process.env.PUBLIC_URL + '/images/ic_back.svg',
  storeApple: process.env.PUBLIC_URL + '/images/ic_apple.png',
  storeGoogle: process.env.PUBLIC_URL + '/images/ic_google.png',
  qrBg: process.env.PUBLIC_URL + '/images/img_qr_bg.png',
  wcFirma: process.env.PUBLIC_URL + '/images/ic_wc_firma.svg',
  wcQR: process.env.PUBLIC_URL + '/images/ic_wc_qr.svg',
  headerFCT: process.env.PUBLIC_URL + '/images/ic_header_fct.svg',
  refresh: process.env.PUBLIC_URL + '/images/ic_refresh.png',
  messageBox: process.env.PUBLIC_URL + '/images/img_message_box.png',
  messageBoxTop: process.env.PUBLIC_URL + '/images/img_message_box_top.png',
  messageBoxMiddle: process.env.PUBLIC_URL + '/images/img_message_box_middle.png',
  messageBoxBottom: process.env.PUBLIC_URL + '/images/img_message_box_bottom.png',
  modalCorner: process.env.PUBLIC_URL + '/images/img_modal_corner.png',
  sword: process.env.PUBLIC_URL + '/images/img_sword.svg',
  buttonLeft: process.env.PUBLIC_URL + '/images/img_btn_left.png',
  buttonRight: process.env.PUBLIC_URL + '/images/img_btn_right.png',
  buttonCenter: process.env.PUBLIC_URL + '/images/img_btn_center.png',
  plate: process.env.PUBLIC_URL + '/images/img_plate.png',
  timer: process.env.PUBLIC_URL + '/images/ic_timer.png',
  copy: process.env.PUBLIC_URL + '/images/ic_copy.svg',
  logout: process.env.PUBLIC_URL + '/images/ic_logout.svg',
  missionListItemBg: process.env.PUBLIC_URL + '/images/img_mission_list_item_bg.png',
  missionListSubBg: process.env.PUBLIC_URL + '/images/img_mission_list_sub_label.png',
  achievementListItemBg: process.env.PUBLIC_URL + '/images/img_achievement_list_item_bg.png',
  lock: process.env.PUBLIC_URL + '/images/ic_lock.png',
  check: process.env.PUBLIC_URL + '/images/ic_check.png',
  ratingStar: process.env.PUBLIC_URL + '/images/img_rating_star.png',
  ratingStarEmpty: process.env.PUBLIC_URL + '/images/img_rating_star_empty.png',
  cloud: process.env.PUBLIC_URL + '/images/img_cloud.png',
  cloud4: process.env.PUBLIC_URL + '/images/img_cloud4.png',
  cloud5: process.env.PUBLIC_URL + '/images/img_cloud5.png',
  coin: process.env.PUBLIC_URL + '/images/img_coin.png',
  grass: process.env.PUBLIC_URL + '/images/img_grass.png',
  fance: process.env.PUBLIC_URL + '/images/img_fance.png',
  road: process.env.PUBLIC_URL + '/images/img_road.png',
  missionBoard: process.env.PUBLIC_URL + '/images/img_mission_board.png',
  firmaLogo: process.env.PUBLIC_URL + '/images/img_firma.svg',
  fctLogo: process.env.PUBLIC_URL + '/images/img_fct.svg',
  loadingLogo: process.env.PUBLIC_URL + '/images/img_loading_logo.svg',
  introChar: process.env.PUBLIC_URL + '/images/img_intro_char.png',
  introLabel: process.env.PUBLIC_URL + '/images/img_intro_label.png',
  introButtonBg: process.env.PUBLIC_URL + '/images/img_intro_button_bg.png',
  introPoweredFirma: process.env.PUBLIC_URL + '/images/img_powered_firma.png',
  signNormal: process.env.PUBLIC_URL + '/images/img_sign_normal.png',
  signHover: process.env.PUBLIC_URL + '/images/img_sign_hover.png',
  sign2: process.env.PUBLIC_URL + '/images/img_sign_2.png',

  character1: process.env.PUBLIC_URL + '/images/img_char_1.gif',
  character2: process.env.PUBLIC_URL + '/images/img_char_2.gif',
  character3: process.env.PUBLIC_URL + '/images/img_char_3.gif',
  character4: process.env.PUBLIC_URL + '/images/img_char_4.gif',
  character5: process.env.PUBLIC_URL + '/images/img_char_5.gif',
  character6: process.env.PUBLIC_URL + '/images/img_char_6.png',
  character7: process.env.PUBLIC_URL + '/images/img_char_7.png',
  character8: process.env.PUBLIC_URL + '/images/img_char_8.png',
  character9: process.env.PUBLIC_URL + '/images/img_char_9.png',
  character10: process.env.PUBLIC_URL + '/images/img_char_10.png',
  character11: process.env.PUBLIC_URL + '/images/img_char_11.png',

  tree: process.env.PUBLIC_URL + '/images/img_tree.png',
  characterStone: process.env.PUBLIC_URL + '/images/img_stone.png',
  chest: process.env.PUBLIC_URL + '/images/img_chest.png',
  chest2: process.env.PUBLIC_URL + '/images/img_chest2.png',
  gem: process.env.PUBLIC_URL + '/images/img_gem.png',
  gemBox: process.env.PUBLIC_URL + '/images/img_gem_box.png',
  star: process.env.PUBLIC_URL + '/images/img_star.gif',
  worldBg: process.env.PUBLIC_URL + '/images/img_world.png',
  stageEnable: process.env.PUBLIC_URL + '/images/img_stage_enable.png',
  stageDisable: process.env.PUBLIC_URL + '/images/img_stage_disable.png',

  socialMedium: process.env.PUBLIC_URL + '/images/img_social_medium.svg',
  socialX: process.env.PUBLIC_URL + '/images/img_social_x.svg',
  socialTelegram: process.env.PUBLIC_URL + '/images/img_social_telegram.svg',
};

const theme = {
  colors,
  sizes,
  urls,
};

export default theme;
