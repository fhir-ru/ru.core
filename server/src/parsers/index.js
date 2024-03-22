import yaml from 'js-yaml';

const parsers = {
  yaml: yaml.load,
};

export const parse = (data, extensionName = 'yaml') => parsers[extensionName](data);
