const tap = require('tap');
import { USet } from "../main.js";

// bad cases
tap.throws(() => new USet('[a'));
tap.throws(() => new USet('a]'));
tap.throws(() => new USet('a'));

// api fails
tap.throws(() => new USet().add(''));
tap.throws(() => new USet().add('abc'));

// TODO cases :(
tap.throws(() => new USet('[a-b]'));
tap.throws(() => new USet('[\\u0027]'));
tap.throws(() => new USet('[\\\\]'));
tap.throws(() => new USet('[{str}]'));
tap.throws(() => new USet('[^a]'));
tap.throws(() => new USet('[:Lo:]'));
tap.throws(() => new USet('[[abc]-[b]]'));
tap.throws(() => new USet('[[ac]&[b]]'));

// Good case
tap.same(new USet().toString(), '[]');
tap.same(new USet('[]').toString(), '[]');
tap.same(new USet('[]').toString(), '[]');
tap.same(new USet('[something else]').toString(), '[eghilmnost]');
tap.same(new USet('[]').add('q').toString(), '[q]');
tap.same(new USet('[]').add('q').addString('hi').toString(), '[q{hi}]');

{
    const s = new USet('[abc]');
    s.addString('Bee');
    s.addString('Alpha');
    tap.same(['a', 'b', 'c'], s.charValues());
    tap.same(['Alpha', 'Bee'], s.stringValues());
}

tap.equal(true, true);
