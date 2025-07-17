export var Shapes = ['var(--shape1)', 'var(--shape2)', 'var(--shape3)', 'var(--shape4)'];
export var Colors = ['var(--color1)', 'var(--color2)', 'var(--color3)'];
export var BackgroundImages = ['var(--bgImage1)', 'var(--bgImage2)', 'var(--bgImage3)', 'var(--bgImage4)'];

export class RankModel {
  constructor(spec = {}) {
    this.rank = spec.rank === undefined ? -1 : spec.rank;
    this.name = spec.name === undefined ? 'Novice' : spec.name;
    this.levels = spec.levels === undefined ? 10 : spec.levels;
    this.hue = spec.hue === undefined ? 0 : spec.hue;
    this.emoji = spec.emoji === undefined ? '' : spec.emoji;
  }
}

export class TutorialStepModel {
  constructor(spec = {}) {
    this.title = spec.title == undefined ? 'Title' : spec.title;
    this.description = spec.description == undefined ? 'Description' : spec.description;
    this.unreveal = spec.unreveal == undefined ? false : spec.unreveal;
    this.partial = spec.partial == undefined ? false : spec.partial;
    this.describe = spec.describe == undefined ? false : spec.describe;
    this.checkBoard = spec.checkBoard == undefined ? false : spec.checkBoard;
  }
}

export class ScoreModel {
  constructor(spec = {}) {
    this.date = spec.date === undefined ? new Date() : spec.date;
    this.modeId = spec.modeId === undefined ? '' : spec.modeId;
    this.rankId = spec.rankId === undefined ? 0 : spec.rankId;
    this.modeName = spec.modeName === undefined ? '' : spec.modeName;
    this.numberOfClears = spec.numberOfClears === undefined ? 0 : spec.numberOfClears;
    this.numberOfPerfectClears = spec.numberOfPerfectClears === undefined ? 0 : spec.numberOfPerfectClears;
    this.totalPossibleClears = spec.totalPossibleClears === undefined ? -1 : spec.totalPossibleClears;
    this.dailyDate = spec.dailyDate === undefined ? new Date() : spec.dailyDate;
    this.isCurrent = spec.isCurrent === undefined ? false : spec.isCurrent;
    this.isDaily = spec.isDaily === undefined ? false : spec.isDaily;
    this.value = spec.value === undefined ? -1 : spec.value;
    this.streak = spec.streak === undefined ? 0 : spec.streak;
  }
}

export class CurrencyModel {
  constructor(spec = {}) {
    this.id = spec.id ?? 0;
    this.name = spec.name ?? '';
    this.labor = spec.labor ?? '';
    this.pluralName = spec.pluralName ?? '';
    this.className = spec.className ?? '';
    this.increment = spec.increment ?? 1000;
    this.count = spec.count ?? 0;
    this.maxCount = spec.maxCount ?? 500000;
    this.isEnabled = spec.isEnabled ?? false;
  }
}

export class ActionItemModel {
  constructor(spec = {}) {
    this.id = spec.id === undefined ? 0 : spec.id;
    this.order = spec.order === undefined ? 0 : spec.order;
    this.icon = spec.icon === undefined ? '' : spec.icon;
    this.name = spec.name === undefined ? 'Reward' : spec.name + ' <icon class="info"></icon> ';
    this.description = spec.description === undefined ? '' : spec.description;
    this.explanation = spec.explanation === undefined ? '' : spec.explanation;
    this.count = spec.count === undefined ? 0 : spec.count;
    this.currency = spec.currency === undefined ? null : spec.currency;
    this.maxCount = spec.maxCount === undefined ? 10 : spec.maxCount;
    this.cost = spec.cost === undefined ? 250 : spec.cost;
    this.isExpanded = spec.isExpanded === undefined ? false : spec.isExpanded;
  }
}

export class ThemeModel {
  constructor(spec = {}) {
    this.name = spec.name == undefined ? '' : spec.name;
    this.color1 = spec.color1 == undefined ? '' : spec.color1;
    this.color2 = spec.color2 == undefined ? '' : spec.color2;
    this.color3 = spec.color3 == undefined ? '' : spec.color3;
    this.color3contrast = spec.color3contrast == undefined ? 'white' : spec.color3contrast;
    this.darkPatternHSL = spec.darkPatternHSL == undefined ? '0, 0%, 0%' : spec.darkPatternHSL;
    this.darkBlendMode = spec.darkBlendMode == undefined ? 'soft-light' : spec.darkBlendMode;
    this.darkPatternOpacity = spec.darkPatternOpacity == undefined ? 1 : spec.darkPatternOpacity;
    this.isSelected = spec.isSelected == undefined ? false : spec.isSelected;
  }
}

export class PieceModel {
  constructor(spec = {}) {
    this.shape = spec.shape == undefined ? 'var(--shape1)' : spec.shape;
    this.color = spec.color == undefined ? 'var(--color1)' : spec.color;
    this.backgroundImage = spec.backgroundImage == undefined ? 'var(--bgImage1)' : spec.backgroundImage;
    this.isSelected = spec.isSelected == undefined ? false : spec.isSelected;
    this.hasDropped = spec.hasDropped == undefined ? false : spec.hasDropped;
    this.delay = spec.delay == undefined ? 0 : spec.delay;
    this.nudge = spec.nudge == undefined ? false : spec.nudge;
    this.isMatch = spec.isMatch == undefined ? false : spec.isMatch;
    this.isFullMatch = spec.isFullMatch == undefined ? false : spec.isFullMatch;
    this.description = spec.description == undefined ? '' : spec.description;
  }
}

export class ModeModel {
  constructor(spec = {}) {
    this.id = spec.id;
    this.name = spec.name;
    this.description = spec.description == undefined ? 'This is a game mode.' : spec.description;
    this.isSelected = spec.isSelected == undefined ? false : spec.isSelected;
    this.starttime = spec.starttime == undefined ? 0 : spec.starttime;
    this.bonustime = spec.bonustime == undefined ? 0 : spec.bonustime;
    this.highscores = spec.highscores == undefined ? [] : spec.highscores;
    this.useBatThwap = spec.useBatThwap == undefined ? false : spec.useBatThwap;
    this.endGameTitle = spec.endGameTitle == undefined ? 'Game Over' : spec.endGameTitle;
    this.endGameConsolationMessage = spec.endGameConsolationMessage == undefined ? '' : spec.endGameConsolationMessage;
  }
}

export class SingleLevelModel {
  constructor(spec = {}) {
    this.me = spec.me == undefined ? new PieceModel({}) : spec.me;
    this.board = spec.board == undefined ? [] : spec.board;
    this.completed = spec.completed == undefined ? false : spec.completed;
  }
}

export class AllLevelsModel {
  constructor(spec = {}) {
    this.allLevelsSource = spec.allLevelsSource == undefined ? '' : spec.allLevelsSource;
    this.allLevels = spec.allLevels == undefined ? [] : spec.allLevels;
    this.date = spec.date == undefined ? new Date() : spec.date;
  }
}

export class Currency {
  Update(_currency, _amount) {
    note('Currency.Update() called');
    return _currency;
  }
}

export function CreateAllLevelsSource(_numOfLevels = 100) {
  let _levelSource = [];
  for (let i = 0; i < _numOfLevels; i++) {
    _levelSource.push(CreateLevelSource());
  }
  _levelSource = _levelSource.join('');
  return _levelSource;
}

export function CreateLevelSource() {
  let _levelSource = [];
  for (let i = 0; i < 17; i++) {
    let _source = getRandomInt(0, Shapes.length) + '' + getRandomInt(0, Colors.length) + '' + getRandomInt(0, BackgroundImages.length);
    _levelSource.push(_source);
  }
  _levelSource = _levelSource.join('');
  return _levelSource;
}

export function ConstructAllLevels(_source, _AllLevelsModel) {
  _AllLevelsModel.allLevelsSource = _source;
  var _piecesSources = _source.match(new RegExp('.{1,3}', 'g'));
  var _levelChunkSize = 17;
  var _levelSources = _piecesSources
    .map(function (e, i) {
      return i % _levelChunkSize === 0 ? _piecesSources.slice(i, i + _levelChunkSize) : null;
    })
    .filter(function (e) {
      return e;
    });
  _levelSources.forEach((_bs, i) => {
    _AllLevelsModel.allLevels.push(ConstructLevel(_bs));
  });
}

export function ConstructLevel(_bs, _splice = false) {
  if (_splice) {
    _bs = _bs.match(new RegExp('.{1,3}', 'g'));
  }

  let _level = new SingleLevelModel({});
  const _b = _bs[0].toString().split('');
  _level.me = new PieceModel({ shape: Shapes[_b[0]], color: Colors[_b[1]], backgroundImage: BackgroundImages[_b[2]] });

  for (let x = 1; x < _bs.length; x++) {
    const _s = _bs[x].toString().split('');
    let _piece = new PieceModel({ shape: Shapes[_s[0]], color: Colors[_s[1]], backgroundImage: BackgroundImages[_s[2]] });
    let _description = '';
    let _likeness = 0;
    if (_piece.color === _level.me.color) {
      _likeness++;
      _description = _description + '<b>color</b>';
    }
    if (_piece.shape === _level.me.shape) {
      _description = _description + '<b>shape</b>';
      _likeness++;
    }
    if (_piece.backgroundImage === _level.me.backgroundImage) {
      _description = _description + '<b>pattern</b>';
      _likeness++;
    }
    _piece.isMatch = _likeness > 1;
    _piece.isFullMatch = _likeness === 3;
    _piece.description = _description;

    _level.board.push(_piece);
  }
  return _level;
}
