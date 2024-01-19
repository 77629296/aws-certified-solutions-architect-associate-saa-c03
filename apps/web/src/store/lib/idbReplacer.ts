type MapEntry<K, V> = [K, V];

const idbReplacer = (_key: string, value: unknown): unknown => {
  if (value instanceof Map) {
    const entries: MapEntry<unknown, unknown>[] = [...value];

    return {
      dataType: 'Map',
      value: entries,
    };
  }

  return value;
};

export default idbReplacer;
