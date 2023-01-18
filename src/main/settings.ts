import Store from 'electron-store';
const storage = new Store();

// Types
type WindowSettings = {
  size: number[];
};
type Theme = 'dark' | 'light';

// Default settings
const minSize = [480, 600]; // Minimum size of window
const defaultSize = [1280, 720]; // Default size of window
const maxSize = [1280, 720]; // Maximum size of window
const useFrame = false; // Use frame or not

// Function to get window settings
const getWindowSettings = (): WindowSettings => {
  const settings: WindowSettings = {
    size: defaultSize,
  };

  const windowSize = storage.get('window-settings') as WindowSettings;

  if (windowSize) settings.size = windowSize.size;
  else storage.set('window-settings', settings);

  return settings;
};
// Function to change window settings
const saveWindowSettings = (settings: WindowSettings) => {
  storage.set('window-settings', settings);
};

// Exports
export {
  getWindowSettings,
  saveWindowSettings,
  WindowSettings,
  defaultSize,
  minSize,
  maxSize,
  useFrame,
};
