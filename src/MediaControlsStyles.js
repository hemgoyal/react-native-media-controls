// @flow

// eslint ignore next $FlowFixMe
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  controlsRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  toolbarRow: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end'
  },
  timeRow: {
    alignSelf: 'stretch'
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginHorizontal: 50
  },
  playIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  replayIcon: {
    width: 25,
    height: 20,
    resizeMode: 'stretch'
  },
  progressContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    left: 0
  },
  playerControl: {
    position: 'absolute',
    top: '50%',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    marginTop: -25
  },
  progressColumnContainer: {
    flex: 1
  },
  fullScreenContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20
  },
  progressSlider: {
    alignSelf: 'stretch'
  },
  timerLabelsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: -7
  },
  timerLabel: {
    fontSize: 12,
    color: 'white'
  },
  track: {
    height: 2,
    borderRadius: 1
  },
  thumb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#FF301B',
    borderWidth: 3
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  fwButton: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 50
  },
  fwIcon: {
    width: 24,
    height: 24
  },
  fwDuration: {
    fontSize: 14,
    color: 'white',
    marginHorizontal: 5
  }
});
