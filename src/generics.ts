function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a','b'])
log(['a','b'])