class CacheService {
  constructor() {
    this.cache = new Map();
  }

  get(key) {
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);

      return null;
    }

    return entry.data;
  }

  set(key, data, ttl) {
    this.cache.set(
      key,

      {
        data,

        expiresAt: Date.now() + ttl,
      },
    );
  }

  delete(key) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }

  has(key) {
    return this.get(key) !== null;
  }

  size() {
    return this.cache.size;
  }
}

export default new CacheService();
