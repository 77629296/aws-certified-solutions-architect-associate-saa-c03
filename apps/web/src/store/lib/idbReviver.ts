type MapEntry<K, V> = [K, V];

const idbReviver = (_key: string, value: unknown): unknown => {
  if (typeof value === 'object' && value !== null && 'dataType' in value && value['dataType'] === 'Map') {
    const mapValue = value as { dataType: 'Map'; value: MapEntry<unknown, unknown>[] };

    return new Map(mapValue.value);
  }

  return value;
};

export default idbReviver;
